/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)
	"ATTGC" --> "TAACG"
	"GTAT" --> "CATA" */

//Solution:
export class Kata {
  static dnaStrand(dna: string) {
    type DnaBase = 'A' | 'C' | 'T' | 'G'
    
    
    const complements: { [K in DnaBase]: DnaBase } =  {
      A: 'T',
      C: 'G',
      T: 'A',
      G: 'C'
    }
    
    let complementarySide = ''
    
    for(let c of dna){
      let base = c as DnaBase
      complementarySide+=complements[base] 
    }
    
    return complementarySide
  }
}