<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
// Define the data
$data = [
    [
        "id" => 1,
        "title" => "Atish",
        "imgsrc" => "https://i.ibb.co/mhjJHCW/image.png",
        "episodes" => [
            "https://cdn9.niazitv.pk/Niazi-Play/Kurulus-Season-5-Urdu-Dubbed/Episode-1.mp4/index.m3u8",
            "https://cdn5.niazitv.pk/Turkish-Dramas-NiaziTV-App-2/Ertugrul-by-PTV-S1/Episode-1.mp4/index.m3u8",
            "https://cdn5.niazitv.pk/Turkish-Dramas-NiaziTV-App-2/Ertugrul-by-PTV-S1/Episode-55.mp4/index.m3u8"
        ]
    ]
];

// Output the JSON
echo json_encode($data);
?>
