let boat = '🚢';

for (let x = 0; x < 10; x++) {
    let string = '';
    let h2 = document.createElement('h2');
    for (let y = 0; y < x; y++) {
        string += boat;
    }
    h2.innerText = string;
    let sea = document.getElementById('sea')
    sea.append(h2)
}

