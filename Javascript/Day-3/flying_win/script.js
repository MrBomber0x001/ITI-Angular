let floatingWindow;
let isMoving = true;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

document.getElementById('openButton').addEventListener('click', () => {
    if (!floatingWindow || floatingWindow.closed) {
        floatingWindow = window.open(
            '',
            '_blank',
            'width=300,height=200,left=50,top=50'
        );

        floatingWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Floating Window</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        height: 100vh;
                        overflow: hidden;
                    }
                    .floating {
                        position: absolute;
                        width: 200px;
                        padding: 20px;
                        background-color: #f1f1f1;
                        border: 1px solid #ccc;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        transition: top 0.5s ease, left 0.5s ease;
                    }
                    button {
                        margin-top: 10px;
                        padding: 5px 10px;
                    }
                </style>
            </head>
            <body>
                <div id="floatingWindow" class="floating">
                    <p>Floating Window</p>
                    <button id="stopButton">Stop</button>
                </div>
                <script>
                    let isMoving = true;
                    let windowWidth = window.innerWidth;
                    let windowHeight = window.innerHeight;
                    let floatingWindow = document.getElementById('floatingWindow');
                    let stopButton = document.getElementById('stopButton');

                    function moveFloatingWindow() {
                        if (isMoving) {
                            let top = Math.random() * (windowHeight - 100);
                            let left = Math.random() * (windowWidth - 200);
                            floatingWindow.style.top = \`\${top}px\`;
                            floatingWindow.style.left = \`\${left}px\`;
                        }
                    }

                    stopButton.addEventListener('click', () => {
                        isMoving = !isMoving;
                        stopButton.textContent = isMoving ? 'Stop' : 'Start';
                    });

                    setInterval(moveFloatingWindow, 1000);
                </script>
            </body>
            </html>
        `);
    } else {
        floatingWindow.focus();
    }
});