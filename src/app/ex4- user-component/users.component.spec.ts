import { UsersComponent } from './users.component';
import { UserService } from './user.service';

xdescribe('UsersComponent', () => {

  beforeEach(() => {
  });

  it('should set users property with the users retrieved from the server', () => {
  });

  describe('When deleting a user', () => {

    beforeEach(() => {
    });

    it('should remove the selected user from the list if the user confirms deletion', () => {
    });

    it('should NOT remove the seleted user from the list if the user cancels', () => {
    });

    it('should call the server to delete the selected user if the user confirms deletion', () => {
    });

    it('should NOT call the server to delete the selected user if the user cancels', () => {
    });

    it('should undo deletion if the call to the server fails', () => {
      // We need to change the implementation of alert, otherwise
      // it will popup a dialog when running our unit tests.
    });

    it('should display an error if the call to the server fails', () => {
    });
  });
});
