/**
 * @license
 * Copyright Worktile Inc All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/worktile/pkg-manager/blob/master/LICENSE
 */
export class ValidationError extends Error {
    prefix: string;
    constructor(prefix: string, message: string) {
        super(message);
        this.name = 'ValidationError';
        this.prefix = prefix;
    }
}