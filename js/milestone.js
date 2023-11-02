document.addEventListener('DOMContentLoaded', function () {
    const milestones = document.querySelectorAll('.milestone');

    milestones.forEach((milestone) => {
        const closeButton = milestone.querySelector('.close-button');
        const details = milestone.querySelector('.milestone-details');

        closeButton.style.display = 'none'; // Initially hide the close button

        closeButton.addEventListener('click', () => {
            details.style.display = 'none';
            closeButton.style.display = 'none';
        });

        milestone.addEventListener('click', () => {
            const isActive = milestone.classList.contains('active');

            milestones.forEach((m) => {
                m.classList.remove('active');
                const closeBtn = m.querySelector('.close-button');
                if (closeBtn) {
                    closeBtn.style.display = 'none';
                }
            });

            if (!isActive) {
                milestone.classList.add('active');
                closeButton.style.display = 'block'; // Show the close button when the milestone is active
            }
            // Toggle the visibility of the milestone details content
            details.style.display = isActive ? 'none' : 'block';
        });
    });
});
