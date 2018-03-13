import { intercept } from './exercise-2'

function functionToWrap(input) {
    return new Promise(resolve => resolve(input + 'c'))
}

function interceptor(input, next) {
    return next(input + 'b').then(result => result + 'd')
}

xit("should intercept a single parameter function and modify the result", done => {
    const intercepted = intercept(functionToWrap, interceptor)

    intercepted('a').then(result => {
        expect(result).toEqual('abcd')
        done()
    })
})
