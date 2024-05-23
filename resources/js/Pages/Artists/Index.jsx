import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Index({auth, getArtist}) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title='Artist'/>
        <div>
          Artis
        </div>

    </AuthenticatedLayout>
  )
}
