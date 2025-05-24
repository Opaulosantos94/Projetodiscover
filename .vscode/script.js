function toggleMode()
{
  //pegar tag html - documentElement quer dizer um elemento lá dentro da estrutura HTML, no caso será a própria tag html
const html = document.documentElement
//colocar uma ação toggle neste elemento com nome light para ser ligada e desligada pelo onclick
html.classList.toggle('light')
//
//agora trabalhar com a imagem para trocar com a função onclick
//
//pegar tag img
const img = document.querySelector("#profile img")
//se classe igual a light válida, então...
if (html.classList.contains("light")) {
//definir imagem nova
img.setAttribute("src", "./assets/avatar-light.png")

//senão, deixa a antiga
} else {
img.setAttribute("src", "./assets/avatar.png")
}
//exercício pegando elemento alt
if (html.classList.contains("light")) {
  img.setAttribute("alt", "Foto de Mayk Brito de óculos escuros, fazendo pose confiante, fundo azul")
} else {
  img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos, barba e com fundo amarelo")
}
}