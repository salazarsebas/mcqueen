<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$allowed_origins = array(
  "http://localhost:3000",
  "https://your-production-domain.com"
);
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
   header("Access-Control-Allow-Origin: " . $origin);
}
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    function validateInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
        
    if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])) {
        echo json_encode(['status' => 'error', 'message' => 'Missing required fields']);
        exit;
    }
        
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email format']);
        exit;
    }
        
    $message = [
        'name' => validateInput($_POST['name']),
        'email' => validateInput($_POST['email']),
        'message' => validateInput($_POST['message']),
        'date' => date('Y-m-d H:i:s')
    ];

    // Asegurarse de que el archivo existe o crearlo
    $file = __DIR__ . '/data/contact.message.json';
    
    if (!is_dir(__DIR__ . '/data')) {
        if (!mkdir(__DIR__ . '/data', 0755, true)) {
            echo json_encode(['status' => 'error', 'message' => 'Failed to create data directory']);
            exit;
        }
    }
    
    if (!file_exists($file)) {
        if (file_put_contents($file, json_encode([])) === false) {
            echo json_encode(['status' => 'error', 'message' => 'Failed to initialize message file']);
            exit;
        }
        chmod($file, 0644);
    }

    // Leer mensajes existentes
    $current_messages = json_decode(file_get_contents($file), true) ?? [];
    
    // Añadir nuevo mensaje
    $current_messages[] = $message;

    // Guardar todo de vuelta al archivo
    if (file_put_contents($file, json_encode($current_messages, JSON_PRETTY_PRINT))) {
        $response = ['status' => 'success', 'message' => 'Mensaje guardado correctamente'];
    } else {
        $response = ['status' => 'error', 'message' => 'Error al guardar el mensaje'];
    }
    
    echo json_encode($response);
    exit;
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}

?>
