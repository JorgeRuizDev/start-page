import tw from "twin.macro"

const Si = tw.h1`
  bg-red-400

`

export default function Home() {
  return (
    <div className={"bg-red-500"}>
      <Si>Hola</Si>
    </div>
  )
}
