// document.addEventListener("DOMContentLoaded", () => {
//   const imageCanvas = document.getElementById("imageCanvas");
//   const ctx = imageCanvas.getContext("2d");
//   const emoticons = document.querySelectorAll(".emoticon");
//   const downloadBtn = document.getElementById("downloadBtn");

//   imageCanvas.width = 500;
//   imageCanvas.height = 500;

//   emoticons.forEach((emoticon) => {
//     emoticon.addEventListener("click", (event) => {
//       const img = new Image();
//       img.src = event.target.src;
//       img.onload = () => {
//         // You can change the coordinates and size of the emoticons as needed
//         ctx.drawImage(
//           img,
//           Math.random() * (imageCanvas.width - 50),
//           Math.random() * (imageCanvas.height - 50),
//           50,
//           50
//         );
//       };
//     });
//   });

//   downloadBtn.addEventListener("click", () => {
//     const link = document.createElement("a");
//     link.download = "emoticon_image.png";
//     link.href = imageCanvas.toDataURL();
//     link.click();
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const imageCanvas = document.getElementById("imageCanvas");
//   const ctx = imageCanvas.getContext("2d");
//   const emoticons = document.querySelectorAll(".emoticon");

//   const downloadBtn = document.getElementById("downloadBtn");

//   imageCanvas.width = 300;
//   imageCanvas.height = 300;

//   let draggedImage = null;
//   let imageOnCanvas = false;

//   downloadBtn.disabled = true;

//   // Add dragstart event to each emoticon
//   emoticons.forEach((emoticon) => {
//     emoticon.addEventListener("dragstart", (event) => {
//       draggedImage = event.target;
//     });
//   });

//   // Allow the canvas to accept drops
//   imageCanvas.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });

//   // Handle the drop event
//   imageCanvas.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const rect = imageCanvas.getBoundingClientRect();

//     // image as a drop position
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     // image center in canvas
//     const centerX = imageCanvas.width / 2;
//     const centerY = imageCanvas.height / 2;

//     if (draggedImage) {
//       const img = new Image();
//       img.src = draggedImage.src;
//       img.onload = () => {
//         // ctx.drawImage(img, x - 25, y - 25, 50, 50); // Draw image at drop position
//         ctx.drawImage(img, centerX - 25, centerY - 25, 50, 50);
//         imageOnCanvas = true;
//         downloadBtn.disabled = false;
//       };
//     }
//   });

//   // Handle the click event to download the image
//   downloadBtn.addEventListener("click", () => {
//     if (imageOnCanvas) {
//       const link = document.createElement("a");
//       link.download = "emoticon_image.png";
//       link.href = imageCanvas.toDataURL();
//       link.click();
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const imageCanvas = document.getElementById("imageCanvas");
//   const ctx = imageCanvas.getContext("2d");
//   const emoticons = document.querySelectorAll(".emoticon");
//   const downloadBtn = document.getElementById("downloadBtn");

//   imageCanvas.width = 300;
//   imageCanvas.height = 300;

//   let draggedImage = null;
//   let imageOnCanvas = false;

//   // Initialize the download button as disabled
//   downloadBtn.disabled = true;

//   // Add dragstart event to each emoticon
//   emoticons.forEach((emoticon) => {
//     emoticon.addEventListener("dragstart", (event) => {
//       draggedImage = event.target;
//     });
//   });

//   // Allow the canvas to accept drops
//   imageCanvas.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });

//   // Handle the drop event
//   imageCanvas.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const rect = imageCanvas.getBoundingClientRect();

//     // Calculate the center coordinates of the canvas
//     const centerX = imageCanvas.width / 2;
//     const centerY = imageCanvas.height / 2;

//     if (draggedImage) {
//       const img = new Image();
//       img.src = draggedImage.src;
//       img.onload = () => {
//         // Draw the image at the center of the canvas
//         ctx.drawImage(img, centerX - 25, centerY - 25, 50, 50);
//         imageOnCanvas = true;
//         downloadBtn.disabled = false; // Enable the download button
//       };
//     }
//   });

//   // Handle the click event to download the image
//   downloadBtn.addEventListener("click", () => {
//     if (imageOnCanvas) {
//       // Create a larger canvas for the download
//       const downloadCanvas = document.createElement("canvas");
//       const downloadCtx = downloadCanvas.getContext("2d");

//       // Set the size of the download canvas (e.g., 1000x1000 for 2x size)
//       downloadCanvas.width = 300;
//       downloadCanvas.height = 300;

//       // Calculate the center coordinates of the download canvas
//       const centerX = downloadCanvas.width / 2;
//       const centerY = downloadCanvas.height / 2;

//       // Redraw the images on the larger canvas
//       downloadCtx.drawImage(
//         imageCanvas,
//         300,
//         300,
//         downloadCanvas.width,
//         downloadCanvas.height
//       );

//       // Download the image from the larger canvas
//       const link = document.createElement("a");
//       link.download = "emoticon_image.png";
//       link.href = downloadCanvas.toDataURL();
//       link.click();
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const imageCanvas = document.getElementById("imageCanvas");
  const ctx = imageCanvas.getContext("2d");
  const emoticons = document.querySelectorAll(".emoticon");
  const kumisan = document.querySelectorAll(".kumis");
  const downloadBtn = document.getElementById("downloadBtn");

  imageCanvas.width = 300;
  imageCanvas.height = 300;

  let draggedImage = null;
  let imageOnCanvas = false;
  const droppedImages = [];

  // Initialize the download button as disabled
  downloadBtn.disabled = true;

  // Add dragstart event to each emoticon
  emoticons.forEach((emoticon) => {
    emoticon.addEventListener("dragstart", (event) => {
      draggedImage = event.target;
    });
  });

  kumisan.forEach((kumis) => {
    kumis.addEventListener("dragstart", (event) => {
      draggedImage = event.target;
    });
  });

  // Allow the canvas to accept drops
  imageCanvas.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  // Handle the drop event
  imageCanvas.addEventListener("drop", (event) => {
    event.preventDefault();
    const rect = imageCanvas.getBoundingClientRect();

    // Calculate the center coordinates of the canvas
    // const centerX = imageCanvas.width / 2;
    // const centerY = imageCanvas.height / 2;

    const centerX = imageCanvas.width / 12;
    const centerY = imageCanvas.height / 12;

    if (draggedImage) {
      const img = new Image();
      img.src = draggedImage.src;
      // img.onload = () => {
      //   // Draw the image at the center of the canvas
      //   ctx.drawImage(img, centerX - 25, centerY - 25, 300, 300);

      //   // Store the image source and position for downloading
      //   droppedImages.push({
      //     img: img,
      //     x: centerX - 25,
      //     y: centerY - 25,
      //     width: 300,
      //     height: 300,
      //   });

      //   imageOnCanvas = true;
      //   downloadBtn.disabled = false; // Enable the download button
      // };
      img.onload = () => {
        if (draggedImage.classList.contains("kumis")) {
          ctx.drawImage(img, centerX + 25, centerY + 60, 200, 200);
          droppedImages.push({
            img: img,
            x: centerX + 25,
            y: centerY + 60,
            width: 200,
            height: 200,
          });
        } else {
          ctx.drawImage(img, centerX - 25, centerY - 25, 300, 300);
          droppedImages.push({
            img: img,
            x: centerX - 25,
            y: centerY - 25,
            width: 300,
            height: 300,
          });
        }
        imageOnCanvas = true;
        downloadBtn.disabled = false;
      };
    }
  });

  // Handle the click event to download the image
  downloadBtn.addEventListener("click", () => {
    if (imageOnCanvas) {
      // Create a canvas for the download
      const downloadCanvas = document.createElement("canvas");
      const downloadCtx = downloadCanvas.getContext("2d");

      // Set the size of the download canvas to match the original canvas
      downloadCanvas.width = imageCanvas.width;
      downloadCanvas.height = imageCanvas.height;

      // Redraw the images at their original size on the download canvas
      droppedImages.forEach(({ img, x, y, width, height }) => {
        downloadCtx.drawImage(img, x, y, width, height);
      });

      // Download the image from the download canvas
      const link = document.createElement("a");
      link.download = "emoticon_image.png";
      link.href = downloadCanvas.toDataURL();
      link.click();
    }
  });
});
