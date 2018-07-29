import React from 'react'

export default function List (props) {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item.id} className='list-item'>
					<span
						className='list-item-text'
						onClick={() => props.toggle && props.toggle(item.id)}
						style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
						{item.name}
					</span>
					<button
						className='delete-button'
						onClick={() => props.remove(item)}>X</button>
				</li>
				))}
		</ul>
	)
}