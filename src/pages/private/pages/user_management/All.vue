<template>
    <div class="card">
        <div class="user_header">
            <span>All</span>
            <span><input type="search" name="" id="" placeholder="Search"></span>
            <div>
                <span>Create</span>
                <span>!!!</span>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead>
                    <tr>
                        <th><input type="checkbox" name="" id=""></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="">
                        </td>
                        <td>01</td>
                        <td>
                            Ethian Bro
                        </td>
                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                        <td>
                            <div class="dropdown">
                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button>
                                <div class="dropdown-menu ">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-1"></i>
                                        Edit</a>
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-1"></i>
                                        Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="">
                        </td>
                        <td>01</td>
                        <td>
                            Ethian Bro
                        </td>
                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                        <td>
                            <div class="dropdown">
                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button>
                                <div class="dropdown-menu ">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-1"></i>
                                        Edit</a>
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-1"></i>
                                        Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="">
                        </td>
                        <td>01</td>
                        <td>
                            Ethian Bro
                        </td>
                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                        <td>
                            <div class="dropdown">
                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button>
                                <div class="dropdown-menu ">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-1"></i>
                                        Edit</a>
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-1"></i>
                                        Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="">
                        </td>
                        <td>01</td>
                        <td>
                            Ethian Bro
                        </td>
                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                        <td>
                            <div class="dropdown">
                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button>
                                <div class="dropdown-menu ">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-1"></i>
                                        Edit</a>
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-1"></i>
                                        Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="">
                        </td>
                        <td>01</td>
                        <td>
                            Ethian Bro
                        </td>
                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                        <td>
                            <div class="dropdown">
                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button>
                                <div class="dropdown-menu ">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-1"></i>
                                        Edit</a>
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-1"></i>
                                        Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
            <!-- <div class="user_pagination">
                <div>
                    <ul class="pagination">
                        <li class="pagination_page">
                            <span> > </span> Previous
                        </li>
                        <li class="pagination_page">
                            1
                        </li>
                        <li class="pagination_page active">
                            <a class="active_page" href="">2</a>
                        </li>
                        <li class="pagination_page">
                            <a class="active_page" href="">2</a>
                        </li>
                        <li class="pagination_page">
                            <a class="active_page" href="">2</a>
                        </li>
                        <li class="pagination_page">
                            Next <span>></span>
                        </li>
                    </ul>
                </div>
            </div> -->
            <div class="card-datatable text-nowrap">
                <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper dt-bootstrap5">
                    <div class="row">
                        <div class="col-sm-6 col-md-5">
                            <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button page-item  disabled"
                                        id="DataTables_Table_1_previous"><a aria-controls="DataTables_Table_1"
                                            aria-disabled="true" aria-role="link" data-dt-idx="previous" tabindex="0"
                                            class="page-link">Previous</a></li>
                                    <li class="paginate_button page-item active"><a aria-controls="DataTables_Table_1"
                                            aria-role="link" aria-current="page" data-dt-idx="0" tabindex="0"
                                            class="page-link">1</a></li>
                                    <li class="paginate_button page-item "><a aria-controls="DataTables_Table_1"
                                            aria-role="link" data-dt-idx="1" tabindex="0" class="page-link">2</a></li>
                                    <li class="paginate_button page-item "><a aria-controls="DataTables_Table_1"
                                            aria-role="link" data-dt-idx="2" tabindex="0" class="page-link">3</a></li>
                                    <li class="paginate_button page-item "><a aria-controls="DataTables_Table_1"
                                            aria-role="link" data-dt-idx="3" tabindex="0" class="page-link">4</a></li>
                                    <li class="paginate_button page-item "><a aria-controls="DataTables_Table_1"
                                            aria-role="link" data-dt-idx="4" tabindex="0" class="page-link">5</a></li>
                                    <li class="paginate_button page-item disabled" id="DataTables_Table_1_ellipsis"><a
                                            aria-controls="DataTables_Table_1" aria-disabled="true" aria-role="link"
                                            data-dt-idx="ellipsis" tabindex="0" class="page-link">…</a></li>
                                    <li class="paginate_button page-item "><a aria-controls="DataTables_Table_1"
                                            aria-role="link" data-dt-idx="9" tabindex="0" class="page-link">10</a></li>
                                    <li class="paginate_button page-item " id="DataTables_Table_1_next"><a
                                            aria-controls="DataTables_Table_1" aria-role="link" data-dt-idx="next"
                                            tabindex="0" class="page-link">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {

        return {
            toggleLi: function (e) {
                e.currentTarget.parentNode.classList.toggle('show');
                console.log(e.currentTarget.parentNode.classList);
            },
        }
    }
}
</script>

<style></style>