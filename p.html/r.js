async function saveNote() {
    const text = document.getElementById('noteArea').value;
    const status = document.getElementById('status');

    const response = await fetch('/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: text })
    });

    if (response.ok) {
        status.innerText = "Saved successfully!";
        setTimeout(() => status.innerText = "", 2000);
    }
}