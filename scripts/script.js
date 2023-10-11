
const resetBtn = document.querySelector('.btn-reset')
const blocksBody = document.querySelector('.square-body')
let blocks = document.querySelectorAll('.block')



// const swap = () => {}

blocksBody.addEventListener('click', (e) => {
    blocks.forEach((elem, index) => {
        if (e.target.closest('.block') === elem) {
            const num = e.target.closest('.block').querySelector('.block-number').textContent
            if (e.target.closest('.left') && index > 0) {
                blocks[index].querySelector('.block-number').textContent = blocks[index - 1].querySelector('.block-number').textContent
                blocks[index - 1].querySelector('.block-number').textContent = num
            }
            if (e.target.closest('.right') && index < 24 ) {
                blocks[index].querySelector('.block-number').textContent = blocks[index + 1].querySelector('.block-number').textContent
                blocks[index + 1].querySelector('.block-number').textContent = num
            }
            if (e.target.closest('.top') && index > 4) {
                blocks[index].querySelector('.block-number').textContent = blocks[index - 5].querySelector('.block-number').textContent
                blocks[index - 5].querySelector('.block-number').textContent = num
            }
            if (e.target.closest('.bottom') && index <= 19) {
                blocks[index].querySelector('.block-number').textContent = blocks[index + 5].querySelector('.block-number').textContent
                blocks[index + 5].querySelector('.block-number').textContent = num
            }
        }
    })
})
