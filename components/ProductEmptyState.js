import { EmptyState } from '@shopify/polaris';
import React from 'react'

function ProductEmptyState({ setIsOpen }) {
    return (
        <EmptyState
          heading="Manage the Products you want to display"
          action={{
            content: "Select products",
            onAction: () => setIsOpen(true)
          }}>
          <p>Select products you want to use</p>
        </EmptyState>
    );
}

export default ProductEmptyState
