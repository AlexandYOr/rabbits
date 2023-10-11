
const resetBtn = document.querySelector('.btn-reset')
const blocksBody = document.querySelector('.square-body')
let blocks = document.querySelectorAll('.block')



// const swap = () => {}

blocksBody.addEventListener('click', (e) => {
    blocks.forEach((elem, index) => {
        if (e.target.closest('.block') === elem) {
            if (e.target.closest('.left')) {
                const num = e.target.closest('.block').querySelector('.block-number').textContent
                blocks[index].querySelector('.block-number').textContent = blocks[index - 1].querySelector('.block-number').textContent
                blocks[index - 1].querySelector('.block-number').textContent = num
            }
            if (e.target.closest('.right')) {
                const num = e.target.closest('.block').querySelector('.block-number').textContent
                blocks[index].querySelector('.block-number').textContent = blocks[index + 1].querySelector('.block-number').textContent
                blocks[index + 1].querySelector('.block-number').textContent = num
            }
            if (e.target.closest('.top')) {
                const num = e.target.closest('.block').querySelector('.block-number').textContent
                blocks[index].querySelector('.block-number').textContent = blocks[index - 5].querySelector('.block-number').textContent
                blocks[index - 5].querySelector('.block-number').textContent = num
            }
            if (e.target.closest('.bottom')) {
                const num = e.target.closest('.block').querySelector('.block-number').textContent
                blocks[index].querySelector('.block-number').textContent = blocks[index + 5].querySelector('.block-number').textContent
                blocks[index + 5].querySelector('.block-number').textContent = num
            }
        }
    })
    console.log(e.target.closest('.block'))
    return blocks
})
