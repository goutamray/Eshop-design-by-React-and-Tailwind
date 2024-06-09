


const Button = ({text, bgColor, textColor, handler = () => {} }) => {

  return (
    <>
      <button className={` ${bgColor} ${textColor} cursor-pointer duration-300 hover:scale-105 px-8 py-2 rounded-full z-10 relative `} > {text}</button>
    </>
  )
}

export default Button












