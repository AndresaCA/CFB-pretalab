export const Relogio = () => {
  const horaLocal = new Date().toLocaleTimeString()
  const dataLocal = new Date().toLocaleDateString()
  return (
    <div>
      <h2>{`Agora são ${horaLocal}`}</h2>
      <h2>{`Hoje é dia ${dataLocal}`}</h2>
    </div>
  )
}
  
  