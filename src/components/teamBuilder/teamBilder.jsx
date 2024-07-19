// React
import { useRef, useEffect } from 'react'

// Styles
import './teamBilder.scss'
// Bootstrap
import Container from 'react-bootstrap/Container'

const TeamBuilder = () => {
  const containerRef = useRef()
  const boxRef = useRef()

  const pointerPosition = [0, 0]
  const pointerMovement = [0, 0]
  const boxTranslate = [0, 0]

  const addNewBox = () => {
    const boxElement = document.createElement('div')
    boxElement.classList.add('childBoxes')
    boxElement.addEventListener('pointerdown', handlePointerDown)
    containerRef.current.appendChild(boxElement)
  }
  const boxDrag = (e) => {
    pointerMovement[0] = e.pageX - pointerPosition[0]
    pointerMovement[1] = e.pageY - pointerPosition[1]
    pointerPosition[0] = e.pageX
    pointerPosition[1] = e.pageY
    boxTranslate[0] += pointerMovement[0]
    boxTranslate[1] += pointerMovement[1]
    boxRef.current.style.transform = `translate(${boxTranslate[0]}px, 
    ${boxTranslate[1]}px)`
  }
  const handlePointerUp = () => {
    document.removeEventListener('pointermove', boxDrag)
    document.removeEventListener('pointerup', handlePointerUp)
  }
  const handlePointerDown = (e) => {
    pointerPosition[0] = e.pageX
    pointerPosition[1] = e.pageY
    boxRef.current = e.currentTarget

    // box current trasnform values
    const styles = window.getComputedStyle(boxRef.current)
    const matrix = new DOMMatrixReadOnly(styles.transform)
    boxTranslate[0] = matrix.e
    boxTranslate[1] = matrix.f

    document.addEventListener('pointermove', boxDrag)
    document.addEventListener('pointerup', handlePointerUp)
  }

  useEffect(() => {}, [])

  return (
    <Container>
      <div className='boxContainer' ref={containerRef}>
        <div
          className='childBoxes box1'
          onPointerDown={handlePointerDown}></div>
        <div
          className='childBoxes box2'
          onPointerDown={handlePointerDown}></div>
        <div
          className='childBoxes box3'
          onPointerDown={handlePointerDown}></div>
      </div>
      <button onClick={addNewBox}>Add box</button>
    </Container>
  )
}

export default TeamBuilder
