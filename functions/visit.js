<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>my domain!</title>

    <!-- Discord Embed Meta Tags -->
    <meta property="og:title" content="Decompile Studios Site" />
    <meta property="og:description" content="currently nothing, but smth will be soon here!" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#5865F2">

    <style>
        body {
            font-family: sans-serif;
            background-color: #ffffff;
            color: #000000;
            margin: 40px;
        }
        h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        p {
            font-size: 16px;
            color: #555555;
            margin-bottom: 25px;
        }
        .counter {
            font-size: 16px;
            color: #555555;
        }
    </style>
</head>
<body>

    <h1>my domain!</h1>
    <p>currently nothing, but smth will be soon here!</p>

    <!-- The clean text global visitor counter -->
    <div class="counter">
        visits: <span id="visit-count">1</span>
    </div>

    <script>
        // Calls your backend function to increase and fetch the global count
        fetch('/visit')
            .then(res => res.json())
            .then(data => {
                document.getElementById('visit-count').innerText = data.count;
            })
            .catch(() => {
                // Safe fallback text if anything drops out
                document.getElementById('visit-count').innerText = "1";
            });
    </script>

</body>
</html>
