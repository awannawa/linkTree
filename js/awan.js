var loading = document.getElementById("loading"); // Loading spinner element

function updateImages() {
  const images = document.querySelectorAll(".gdrive-image");
  images.forEach(function (img) {
    const imageId = img.getAttribute("idLink");
    img.src = `https://drive.google.com/thumbnail?id=${imageId}&sz=s1080`;
  });
}

// Event listener untuk memanggil fungsi updateImages saat window load
window.addEventListener("load", updateImages);

loading.style.display = "flex";
fetch(
  "https://script.googleusercontent.com/macros/echo?user_content_key=sbACTqH27Tmh-YgUulb5jlkpxK-rcZcOab2oEXXwz22LI2V3066lYgaDnjzRdQ4kaFX4W2xEVxphBVHv-5AM-3SWRYogs7vPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBxqfxbtQcOPFdYQQArrpGG2IDj4IeEhgDVsgs0UzpMH3-hk5QHcELt1NNrk5GnmE3iTdyo4g0TMYo5Grr5dW3i6Rq62vnBhCg&lib=MbTCY94-B3SGcli0nfwpjAW9v2Zxi0IEI"
)
  .then((response) => response.json())
  .then((data) => {
    updateLinks(data);
  });

function updateLinks(data) {
  let linksContainer = document.getElementById("link-page");

  data.forEach((item) => {
    let linkElement = document.createElement("a");
    linkElement.href = item["link-page"];
    linkElement.target = "_blank";

    let iconElement = document.createElement("i");
    iconElement.className = item["font-awesome"];

    linkElement.appendChild(iconElement);
    linkElement.appendChild(document.createTextNode(` ${item["name-page"]}`));
    linksContainer.appendChild(linkElement);
    loading.style.display = "none";
  });
}
