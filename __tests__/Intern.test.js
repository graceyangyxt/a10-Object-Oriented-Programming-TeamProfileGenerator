const Intern = require('../lib/Intern');

describe('Intern',()=>{
    describe('Initialization',()=>{
        it('returns an object that is an instance of the Intern class when called with the new keyword',()=>{
            const intern = new Intern();
            expect(intern instanceof Intern).toBe(true);
        });
        it('sets school based on constructor argument',()=>{
            const school = "schoolname";
            const intern = new Intern("",0,"",school);
            expect(intern.school).toBe(school);
        });
    });
    describe('getSchool',()=>{
        it('returns the school when the getSchool() method is called' ,()=>{    
          const school= "schoolname";
          const intern = new Intern("",0,"",school);
          expect(intern.getSchool()).toBe(school);
        });
       });
    
       describe('getRole',()=>{
        it('returns the Intern when the getRole() method is called' ,()=>{    
          const intern = new Intern("",0,"","");
          expect(intern.getRole()).toBe('Intern');
        });
       });
});