let valores = [2,5,6,7,4,8]
valores.sort()
for (var pos = 0; pos < valores.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}