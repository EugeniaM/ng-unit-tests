import { VoterComponent } from './voter.component';

xdescribe('VoterComponent', () => {

    beforeEach(() => {
    });

    it('should calculate total votes properly', () => {
    });

    // Note that the 4 tests for upvotting are grouped under a separate suite.
    // This makes it easier to see the report of our tests: "When upvote, it should ..."

    describe('When upvote,', () => {
      it('should increment total votes', () => {
      });

      it('should NOT increment total votes if I have already submitted a positive vote', () => {
      });

      it('should raise an event', () => {
      });

      it('should NOT raise an event if I have already submitted a positive vote', () => {
      });
    });

    describe('When I downvote,', () => {
      it('should decrement total votes', () => {
      });

      it('should NOT decrement total votes if I have already submitted a negative vote', () => {
      });

      it('should raise an event', () => {
      });

      it('should NOT raise an event if I have already submitted a negative vote', () => {
      });
    });
});
