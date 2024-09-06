document.getElementById('drawButton').addEventListener('click', function() {
    const prizes = [
        { name: '荣耀X7耳机', probability: 10 },
        { name: '华为鼠标', probability: 24 },
        { name: '无线充', probability: 5 },
        { name: '80W充电器', probability: 20 },
        { name: '安慰奖', probability: 41 }
    ];

    const random = Math.random() * 100;
    let cumulativeProbability = 0;
    let result = '安慰奖';

    for (let prize of prizes) {
        cumulativeProbability += prize.probability;
        if (random < cumulativeProbability) {
            result = prize.name;
            break;
        }
    }

    document.getElementById('result').innerText = `恭喜你，获得：${result}`;
});
