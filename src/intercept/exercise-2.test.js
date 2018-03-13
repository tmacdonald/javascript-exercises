import { intercept } from './intercept-2'

function A(input) {
    return new Promise(resolve => resolve(input + 'c'))
}

function interceptor(input, next) {
    return next(input + 'b').then(result => result + 'd')
}

xit("should intercept a single parameter function and modify the result", done => {
    const intercepted = intercept(interceptee, interceptor)

    intercepted('a').then(result => {
        expect(result).toEqual('abcd')
        done()
    })
})
