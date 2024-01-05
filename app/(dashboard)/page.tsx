import Image from 'next/image'
import {UserButton} from "@clerk/nextjs";
import {GetFormStats} from "@/actions/form";
import StatsCard from "@/app/(dashboard)/components/StatsCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}

async function CardStatsWrapper(){
  const stats=await GetFormStats()
  return <StatsCard loading={false} data={stats}/>
}
