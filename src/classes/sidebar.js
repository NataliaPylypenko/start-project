import {block} from "../utils";
import {DescriptionBlock, TitleBlock} from "./blocks";


export class Sidebar {
    constructor(selector, updateCallBack) {
        this.$el = document.querySelector(selector)
        this.update = updateCallBack

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('description'),
            block('title')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        // улучшить чтоб работало со всеми типами
        const newBlock = type === 'description'
            ? new DescriptionBlock(value, {styles})
            : new TitleBlock(value, {styles})

        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }

}