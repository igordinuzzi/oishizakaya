document.addEventListener('DOMContentLoaded', function () {
    const milestones = document.querySelectorAll('.milestone');

    milestones.forEach((milestone) => {
        const milestoneTitle = milestone.querySelector('.milestone-toggle');
        const toggleButton = milestone.querySelector('.milestone-toggle-button');
        const details = milestone.querySelector('.milestone-details');

        toggleButton.addEventListener('click', () => {
            const isClosed = details.style.display === 'none' || details.style.display === '';
            
            if (isClosed) {
                details.style.display = 'block';
                toggleButton.textContent = 'Close';
            } else {
                details.style.display = 'none';
                toggleButton.textContent = 'Open';
            }
        });
    });
});
