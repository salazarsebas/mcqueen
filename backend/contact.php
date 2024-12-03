<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $message = [
        'name' => $_POST['name'],
        'email' => $_POST['email'],
        'message' => $_POST['message'],
        'date' => date('Y-m-d H:i:s')
    ];

    // Asegurarse de que el archivo existe o crearlo
    $file = 'contact.message.json';
    if (!file_exists($file)) {
        file_put_contents($file, json_encode([]));
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
