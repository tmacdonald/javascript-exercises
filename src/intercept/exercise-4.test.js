import { intercept } from './exercise-4'

// This one is a bit more challenging
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters for a hint

function functionToWrap(a, b) {
    return new Promise(resolve => resolve(a + b))
}

function interceptor1(a, b, next) {
    return next(a + '1', b + '1').then(result => result + '1')
}

function interceptor2(a, b, next) {
    return next(a + '2', b + '2').then(result => result + '2')
}

xit("should intercept a single parameter function and modify the result", done => {
    const intercepted = intercept(functionToWrap, [interceptor1, interceptor2])

    intercepted('a', 'b').then(result => {
        expect(result).toEqual('a12b1221')
        done()
    })
})

xit("should take in account order", done => {
    const intercepted = intercept(functionToWrap, [interceptor2, interceptor1])

    intercepted('a', 'b').then(result => {
        expect(result).toEqual('a21b2112')
        done()
    })
})