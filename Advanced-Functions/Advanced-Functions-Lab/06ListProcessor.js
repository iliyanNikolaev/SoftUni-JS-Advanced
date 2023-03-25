function listProcessor(input) {
    let output = [];

    input.forEach(el => {

        let [command, str] = el.split(' ');

        switch(command){
            case 'add': 
                add(str);
                break;
            case 'remove':
                remove(str);
                break;
            case 'print':
                print();
                break; 
        }
    });

    function add(str){
        output.push(str);
    }

    function remove(str){

        output = output.filter(w => w !== str);
    }

    function print() {
        console.log(output.join(','))
    }
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);