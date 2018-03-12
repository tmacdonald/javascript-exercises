import { intercept } from './intercept-3'

function interceptee(input) {
    return new Promise(resolve => resolve(input + 'd'))
}

function interceptor1(input, next) {
    return next(input + 'b').then(result => result + 'f')
}

function interceptor2(input, next) {
    return next(input + 'c').then(result => result + 'e')
}

xit("should intercept a single parameter function and modify the result", done => {
    const intercepted = intercept(interceptee, [interceptor1, interceptor2])

    intercepted('a').then(result => {
        expect(result).toEqual('abcdef')
        done()
    })
})

xit("should take in account order", done => {
    const intercepted = intercept(interceptee, [interceptor2, interceptor1])

    intercepted('a').then(result => {
        expect(result).toEqual('acbdfe') // Note that subtle order difference here
        done()
    })
})