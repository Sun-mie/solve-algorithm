function solution(s1, s2) {
    return s1.filter((v)=>s2.includes(v)).length;
}