import trollFace from "../images/troll-face.png"

export default function Header() {
  return (
    <header class="header">
      <img src={trollFace} />
      <h1>Meme Generator</h1>
    </header>
  )
}
