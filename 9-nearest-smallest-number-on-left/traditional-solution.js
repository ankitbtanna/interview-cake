useEffect(() =>{
        const input = [4, 5, 2, 10, 8]
        let output: any = ['-']
        for(let i = 1;i < input.length; i++){
            let lesserVal : any = '-'
            for(let j = i - 1; j >=0; j--){
                if(input[j] < input[i]){
                    if(lesserVal === '-' || input[j] < lesserVal){
                        lesserVal = input[j]
                    }
                }
            }
            output.push(lesserVal)
        }
        console.log(output)
    },[])
