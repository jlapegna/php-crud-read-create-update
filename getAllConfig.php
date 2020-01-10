  <?php

    header('Content-Type: application/json');

    $server = "localhost";
    $username = "jolanda";
    $password = "jolanda";
    $dbname = "HotelDB";

    $conn = new mysqli($server, $username, $password, $dbname);

      if ($conn && $conn->connect_error) {
      echo ("Connection failed: " . $conn->connect_error);

      }
      
$sql = "

        SELECT *
        FROM configurazioni

    ";

    $res = $conn -> query($sql);
    if ($res -> num_rows < 1) {

      echo json_encode(-2);
      return;
    }

    $configurazioni = [];

    while ($conf = $res -> fetch_assoc()){
      $configurazioni[] = $conf;
    }

    echo json_encode($configurazioni);
