function scoreCalculator(scores) {
    return scores.reduce((acc,val) =>{
        if (val < 0) {
            return acc;
        } 
        return acc+val;
    },0);
}

describe('scoreCalculator', () => {
    it('should work with one number', () =>{
        const sum = scoreCalculator([70]);
        expect(sum).toBe(70);
    });

    it('should work with more than one number', () =>{
        const sum = scoreCalculator([70, 80]);
        expect(sum).toBe(150);
    });

    it('should treat negative scores as zero', ()=> {
        const sum = scoreCalculator([70, -65, 80, - 92]);
        expect(sum).toBe(150);
    });

    it('should return zero with empty input', () => {
        const sum = scoreCalculator([]);
        expect(sum).toBe(0);
    })

});
