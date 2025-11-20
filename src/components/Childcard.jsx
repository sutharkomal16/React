function Childcard(data) {
    console.log(data);
    return (
        <div className="childcard">
            <img src="https://images.unsplash.com/photo-1748723594319-142e211b46a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
            <h1>{data.user}</h1>
            <h1>{data.age}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, soluta? Molestias ratione dignissimos praesentium vel eveniet obcaecati reprehenderit natus dicta quo architecto, necessitatibus perspiciatis odit maxime saepe soluta, expedita nostrum.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Childcard;