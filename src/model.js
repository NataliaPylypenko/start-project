import {TitleBlock, ImageBlock, ColumnsBlock, DescriptionBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Hello world from js', {
        tag: 'h2',
        styles: {
            background: '#493240',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock('https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg', {
        styles: {
            background: '#F7F9FA ',
            display: 'flex',
            'justify-content': 'center',
            padding: '2rem 0'
        },
        imageStyles: {
            width: '200px',
            height: 'auto'
        },
        alt: 'logo'
    }),
    new ColumnsBlock([
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm',
    ],{
        styles: {
            background: '#493240',
            color: '#fff',
            'font-weight': 'bold',
            padding: '2rem'
        }
    }),
    new DescriptionBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit.',{
        styles: {
            background: '#F7F9FA ',
            'font-weight': 'bold',
            padding: '2rem'
        }
    }),
]
