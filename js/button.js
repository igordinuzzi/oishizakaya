
            function bounceButton() {
              const button = document.querySelector(".btn");
              button.style.animation = "bounce 5s infinite"; // Increase the animation duration to 5 seconds
              setTimeout(() => {
                button.style.animation = "none";
              }, 60000); // 60000 milliseconds (1 minute)
            }
            
            // Call the function initially
            bounceButton();
            
            // Set up an interval to repeat the animation every minute
            setInterval(bounceButton, 60000);
