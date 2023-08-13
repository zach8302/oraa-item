document.getElementById('data-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const priority = document.getElementById('priority').value;
    const type = document.getElementById('type').value;

    const requestData = {
        name: name,
        priority: priority,
        type: type,
        code: "Z83LIT"
    };

    try {
        const response = await fetch('https://coral-app-u4tds.ondigitalocean.app/api/test/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<p>POST request successful!</p>';
        } else {
            console.error('POST request failed');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});
