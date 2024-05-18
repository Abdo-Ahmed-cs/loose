"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import Link from "next/link"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

export type Customer = {
    id: number | string
    name: string
    emil_address: string
    complete_address: string
    create_at: Date
    last_activity: Date,
    action: string
}

export const columns: ColumnDef<Customer>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="text-sm text-n-50 uppercase"
                >
                    name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const value: string = row.getValue("name")
            return <span className="text-base text-n-80">{value}</span>
        },
    },
    {
        accessorKey: "email_address",
        header: () => {
            return <span className="text-sm text-n-50 uppercase">email address</span>
        },
        cell: ({ row }) => {
            const value: string = row.getValue("email_address")
            return <span className="text-base text-n-80">{value}</span>
        },
    },
    {
        accessorKey: "complete_address",
        header: () => {
            return <span className="text-sm text-n-50 uppercase">complete address</span>
        },
        cell: ({ row }) => {
            const value: string = row.getValue("complete_address")
            return <span className="text-base inline-block text-n-80 w-[150px]">{value}</span>
        },
    },
    {
        accessorKey: "create_at",
        header: () => {
            return <span className="text-sm text-n-50 uppercase">create at</span>
        },
        cell: ({ row }) => {
            const value: string = row.getValue("create_at")
            return <span className="text-base text-n-80">{value}</span>
        },
    },
    {
        accessorKey: "last_activity",
        header: () => {
            return <span className="text-sm text-n-50 uppercase">last activity</span>
        },
        cell: ({ row }) => {
            const value: string = row.getValue("last_activity")
            return <span className="text-base text-n-80">{value}</span>
        },
    },
    {
        accessorKey: "action",
        header: () => {
            return <span className="text-sm text-n-50 uppercase">action</span>
        },
        cell: ({ row }) => {
            const customer = row.original
            return <Link href={`/customers/${customer.id}`} className="text-base text-primary-main capitalize">Detail</Link>
        },
    },
]
