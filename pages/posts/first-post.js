import React from 'react';
import Link from 'next/link'

export default function FistPost() {
    return (
        <div>First Page
            <Link href='/'>
                <a>点击这里</a>
            </Link>
        </div>
    )
}