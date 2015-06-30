(function() {
  'use strict';

  describe('Part II', function() {
    describe('contains', function() {
      it('should return false if a collection does not contain a user-specified value', function() {
        expect(_.contains([4, 5, 6], 2)).to.be.false;
      });

      it('should return true if a collection contains a user-specified value', function() {
        expect(_.contains([4, 5, 6], 5)).to.be.true;
      });

      it('should work on objects', function(){
        expect(_.contains({ a: 4, b: 5, c: 6 }, 5)).to.be.true;
      });
    });

    describe('every', function() {
      var isEven = function(num) {
        return num % 2 === 0;
      };

      it('passes by default for an empty collection', function() {
        expect(_.every([], _.identity)).to.be.true;
      });

      it('passes for a collection of all-truthy results', function() {
        expect(_.every([true, {}, 1], _.identity)).to.be.true;
      });

      it('fails for a collection of all-falsy results', function() {
        expect(_.every([null, 0, undefined], _.identity)).to.be.false;
      });

      it('fails for a collection containing mixed falsy and truthy results', function() {
        expect(_.every([true, false, 1], _.identity)).to.be.false;
        expect(_.every([1, undefined, true], _.identity)).to.be.false;
      });

      it('should work when provided a collection containing undefined values', function() {
        expect(_.every([undefined, undefined, undefined], _.identity)).to.be.false;
      });

      it('should cast the result to a boolean', function() {
        expect(_.every([1], _.identity)).to.be.true;
        expect(_.every([0], _.identity)).to.be.false;
      });

      it('should handle callbacks that manipulate the input', function() {
        expect(_.every([0, 10, 28], isEven)).to.be.true;
        expect(_.every([0, 11, 28], isEven)).to.be.false;
      });

      it('should work when no callback is provided', function() {
        expect(_.every([true, true, true])).to.be.true;
        expect(_.every([true, true, false])).to.be.false;
        expect(_.every([false, false, false])).to.be.false;
      });
    });

    describe('some', function() {
      var isEven = function(number){
        return number % 2 === 0;
      };

      it('should fail by default for an empty collection', function() {
        expect(_.some([])).to.be.false;
      });

      it('should pass for a collection of all-truthy results', function() {
        expect(_.some([true, {}, 1], _.identity)).to.be.true;
      });

      it('should fail for a collection of all-falsy results', function() {
        expect(_.some([null, 0, undefined], _.identity)).to.be.false;
      });

      it('should pass for a collection containing mixed falsy and truthy results', function() {
        expect(_.some([true, false, 1], _.identity)).to.be.true;
      });

      it('should pass for a set containing one truthy value that is a string', function() {
        expect(_.some([null, 0, 'yes', false], _.identity)).to.be.true;
      });

      it('should fail for a set containing no matching values', function() {
        expect(_.some([1, 11, 29], isEven)).to.be.false;
      });

      it('should pass for a collection containing one matching value', function() {
        expect(_.some([1, 10, 29], isEven)).to.be.true;
      });

      it('should cast the result to a boolean', function() {
        expect(_.some([1], _.identity)).to.be.true;
        expect(_.some([0], _.identity)).to.be.false;
      });

      it('should work when no callback is provided', function() {
        expect(_.some([true, true, true])).to.be.true;
        expect(_.some([true, true, false])).to.be.true;
        expect(_.some([false, false, false])).to.be.false;
      });
    });

    describe('extend', function() {
      it('returns the first argument', function() {
        var to = {};
        var from = {};
        var extended = _.extend(to, from);

        expect(extended).to.equal(to);
      });

      it('should extend an object with the attributes of another', function() {
        var to = {};
        var from = { a: 'b' };
        var extended = _.extend(to, from);

        expect(extended.a).to.equal('b');
      });

      it('should override properties found on the destination', function() {
        var to = { a: 'x' };
        var from = { a: 'b' };
        var extended = _.extend(to, from);

        expect(extended.a).to.equal('b');
      });

      it('should not override properties not found in the source', function() {
        var to = { x: 'x' };
        var from = { a: 'b' };
        var extended = _.extend(to, from);

        expect(extended.x).to.equal('x');
      });

      it('should extend from multiple source objects', function() {
        var extended = _.extend({ x: 1 }, { a: 2 }, { b:3 });

        expect(extended).to.eql({ x: 1, a: 2, b: 3 });
      });

      it('in the case of a conflict, it should use the last property\'s values when extending from multiple source objects', function() {
        var extended = _.extend({ x: 'x' }, { a: 'a', x: 2 }, { a: 1 });

        expect(extended).to.eql({ x: 2, a: 1 });
      });
    });

  });
}());
