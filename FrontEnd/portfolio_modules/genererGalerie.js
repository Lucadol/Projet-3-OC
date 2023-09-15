// let gallery = window.localStorage.getItem('gallery')
// if (gallery === null){
//     const reponse = await fetch("http://localhost:5678/api/works")
//     gallery = await reponse.json()
// }else{
//     gallery = JSON.parse(gallery)
// }


export function genererGalerie(data){
    for (let i = 0; i < data.length; i++) {
        const article = data[i]

        const sectionGallery = document.querySelector(".gallery")
        const pieceElement = document.createElement("figure")

        pieceElement.classList.add("image-div")
        pieceElement.classList.add("image-div2")

        const imageElement = document.createElement("img")
        imageElement.src = article.imageUrl

        const titleElement = document.createElement("figcaption")
        titleElement.innerText = article.title

        pieceElement.setAttribute('image-id2', article.id)

        sectionGallery.appendChild(pieceElement)
        pieceElement.appendChild(imageElement)
        pieceElement.appendChild(titleElement)

        }
    }