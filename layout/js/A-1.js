const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const dpr = window.devicePixelRatio

const canvasWidth = 500
const canvasHeight = 500

canvas.style.width = `${canvasWidth}px`
canvas.style.height = `${canvasHeight}px`

canvas.width = canvasWidth * dpr
canvas.height = canvasHeight * dpr

ctx.scale(dpr, dpr)

ctx.fillRect(30, 30, 100, 100)