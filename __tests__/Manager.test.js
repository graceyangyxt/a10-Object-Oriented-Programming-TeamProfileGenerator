const Manager = require('../lib/Manager');

describe( 'Manager',()=>{
   describe('Initialization',()=>{
    it('returns an object that is an instance of the Manager class when called with the new keyword',()=>{
        const manager = new Manager();
        expect(manager instanceof Manager).toBe(true);
    });
    it('sets officeNumber based on constructor argument',()=>{
        const officeNumber = 1;
        const manager = new Manager("",0,"",officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    });
   });

   describe('getRole',()=>{
    it('returns the Manager when the getRole() method is called' ,()=>{    
      const manager = new Manager("",0,"",0);
      expect(manager.getRole()).toBe('Manager');
    });
   });

   describe('getOfficeNumber',()=>{
    it('returns the officeNumber when the getOfficeNumber() method is called' ,()=>{
      const officeNumber = 1;
      const manager = new Manager("",0,"",officeNumber);
      expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
   });
});
