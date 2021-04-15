const Engineer = require('../lib/Engineer');

describe('Engineer',()=>{
    describe('Initialization',()=>{
        it('returns an object that is an instance of the Engineer class when called with the new keyword',()=>{
            const engineer = new Engineer();
            expect(engineer instanceof Engineer).toBe(true);
        });
        it('sets github based on constructor argument',()=>{
            const github = "githubname";
            const engineer = new Engineer("",0,"",github);
            expect(engineer.github).toBe(github);
        });
    });
    describe('getGithub',()=>{
        it('returns the github when the getGithub() method is called' ,()=>{    
          const github= "githubname";
          const engineer = new Engineer("",0,"",github);
          expect(engineer.getGithub()).toBe(github);
        });
       });
    
       describe('getRole',()=>{
        it('returns the Engineer when the getRole() method is called' ,()=>{    
          const engineer = new Engineer("",0,"","");
          expect(engineer.getRole()).toBe('Engineer');
        });
       });
});