<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

function saveMessage(string $name, string $messageText, string $file = 'contact.message.json'): array
{
    $message = [
        'name' => $name,
        'message' => $messageText,
        'date' => date('Y-m-d H:i:s'),
    ];

    if (!file_exists($file)) {
        file_put_contents($file, json_encode([], JSON_THROW_ON_ERROR));
    }

    $currentMessages = json_decode(file_get_contents($file), true, 512, JSON_THROW_ON_ERROR) ?? [];
    $currentMessages[] = $message;

    if (file_put_contents($file, json_encode($currentMessages, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR))) {
        return ['status' => 'success', 'message' => 'Mensaje guardado correctamente'];
    }

    return ['status' => 'error', 'message' => 'Error al guardar el mensaje'];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = saveMessage($_POST['name'], $_POST['message']);
    echo json_encode($response, JSON_THROW_ON_ERROR);
    exit;
}

echo json_encode(['status' => 'error', 'message' => 'Invalid request method.'], JSON_THROW_ON_ERROR);
