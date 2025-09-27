document.getElementById("sendBtn").addEventListener("click", async () => {
    const input = document.getElementById("textInput").value;
    const status = document.getElementById("status");

    if (!input.trim()) {
        status.textContent = "Введите текст перед отправкой!";
        status.style.color = "red";
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/submit", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: input
        });

        if (response.ok) {
            status.textContent = "Данные успешно отправлены!";
            status.style.color = "green";
        } else {
            const errText = await response.text();
            status.textContent = "Ошибка: " + errText;
            status.style.color = "red";
        }
    } catch (error) {
        status.textContent = "Ошибка подключения к серверу";
        status.style.color = "red";
    }
});
